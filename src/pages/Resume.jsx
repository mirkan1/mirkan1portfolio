import React, { Component } from 'react';
import "../css/resume.css"

// deleted until further notice
// import pdf_file from "../pdf/Renas_Kilic_Resume_2023.pdf";
// once I used below to show my resume but the npm package is bugged now
// <Document 
//     file={pdf_file} 
//     onLoadSuccess={() => {
//         console.info("pdf loaded")
//     }}>
//     <Page className={["flexPage"]} width={document.querySelector('#root').clientWidth/1.45} height={document.querySelector('#root').clientHeight/1.45} pageNumber={1} />
// </Document>
// <a href={pdf_file} download>download as .pdf</a>

export default class Resume extends Component {
    state = { numPages: null, pageNumber: 1 };
    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
      };
      goToPrevPage = () =>
        this.setState(state => ({ pageNumber: state.pageNumber - 1 }));
      goToNextPage = () =>
        this.setState(state => ({ pageNumber: state.pageNumber + 1 }));
    render() {
        return (
          <div className="mail-div">
              <p className="mail-div-p">Send me an email for my resume by clicking button</p>
              <a className="mail-div-a" href="mailto:mirkanbaba1@gmail.com&subject=Resume Request">Request Resume</a>
          </div>
            )
        }
}
