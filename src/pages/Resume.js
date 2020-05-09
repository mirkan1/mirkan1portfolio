import pdf_file from "../pdf/Renas_Kilic_Resume.pdf";
import React, { Component } from 'react';
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
var file_loc = "C:/Users/Raq/Desktop/My projects/mirkan1Portfolio/src/pdf/Renas_Kilic_Resume.pdf"

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
        const { pageNumber, numPages } = this.state;
        console.log(pdf_file)

        return (
        <div style={{ alignItems: "center" }}>
            <Document 
                file={pdf_file} 
                onLoadSuccess={() => {
                    if (window.innerWidth < 682) {
                        document.getElementById("root").style.width = "682px"
                    }
                }}>
                <Page pageNumber={1} />
            </Document>
        </div>
        )
    }
}
