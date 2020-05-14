import React from "react";
import FormInput from "../form-input/form-input.components";
import CustomButton from "../custom-button/custom-button.components";
import "./form.styles.scss";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class BookInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      author: "",
      pdf: "",
      image: "",
      pages: "",
      loaded: 0,
    };
  }
  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };
  handleFileChange = (event) => {
    const { name } = event.target;
    this.setState({ [name]: event.target.files[0] });
    
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    const { title, author, pdf, image, pages } = this.state;
    
    const data = new FormData();
    data.append("pdf", pdf);
    data.append("cover", image);
    data.append("title", title);
    data.append("author", author);
    data.append("page", pages);
    const headers = { "Content-Type": "multipart/form-data" };
    axios
      .post(
        "http://localhost:8000/upload/",
        data,
        {
          onUploadProgress: (ProgressEvent) => {
            this.setState({
              loaded: (ProgressEvent.loaded / ProgressEvent.total) * 100,
            });
          },
        },
        { headers: headers }
      )
      .then((res) => {
        
        toast.info("upload success");
        this.props.action();

        //window.location.reload();
      })
      .catch((err) => toast.error("upload fail"));
    
    
    this.setState({
      title: "",
      author: "",
      pdf: "",
      image: "",
      pages: "",
      loaded: 0,
    });
  };
  render() {
    return (
      <div className="bookinput">
        <h2>Enter Book Details</h2>
        <form onSubmit={this.handleSubmit} className='details'>
          <FormInput
            name="title"
            type="text"
            handleChange={this.handleChange}
            label="Title"
            value={this.state.title}
            required
          />
          <FormInput
            name="author"
            type="text"
            handleChange={this.handleChange}
            label="Author"
            value={this.state.author}
            required
          />
          <div className="form-item">
            <label htmlFor="pdf" className="formlabel">
              Upload File
            </label>
            <input
              className="input"
              type="file"
              name="pdf"
              onChange={this.handleFileChange}
            />
          </div>
          <div className="form-item">
            <label htmlFor="pdf" className="formlabel">
              Upload cover
            </label>
            <input
              className="input"
              type="file"
              name="image"
              onChange={this.handleFileChange}
            />
          </div>
          <FormInput
            name="pages"
            type="text"
            handleChange={this.handleChange}
            label="Pages(eg:1-4)"
            value={this.state.pages}
            required
          />
          <div className="upload">
            <ToastContainer />
            
            <CustomButton type="submit">Upload</CustomButton>
          </div>
        </form>
        <form action="http://localhost:8000/merge/" className="merge-button">
          <input className='merger' type='submit' value='Merge'/>
        </form>

      </div>
    );
  }
}

export default BookInput;
