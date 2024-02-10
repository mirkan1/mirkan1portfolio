import pdf_file from "../pdf/Renas_Kilic_Resume_2023.pdf";
import React, { Component } from 'react';
//import { pdfjs } from "react-pdf"; // Document, Page
import styled from 'styled-components';
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const Styles = styled.div`
    .flexPage {
        background-color: rgba(32, 32, 32, .7);
        padding-left: 3%;
    }
    a {
        height: 100px;
        width: 150px;
    }
 
`;

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
        <Styles>
            {/* <Document 
                file={pdf_file} 
                onLoadSuccess={() => {
                    console.info("pdf loaded")
                }}>
                <Page className={["flexPage"]} width={document.querySelector('#root').clientWidth/1.45} height={document.querySelector('#root').clientHeight/1.45} pageNumber={1} />
            
            </Document> */}
            <a href={pdf_file} download>download as .pdf</a>
        </Styles>
        )
    }
}
