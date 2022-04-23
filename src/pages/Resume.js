import pdf_file from "../pdf/Renas_Kilic_Resume.pdf";
import React, { Component } from 'react';
import { Document, Page, pdfjs } from "react-pdf";
import styled from 'styled-components';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
var file_loc = "C:/Users/Raq/Desktop/My projects/mirkan1Portfolio/src/pdf/Renas_Kilic_Resume.pdf"


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
        const { pageNumber, numPages } = this.state;
        return (
        <Styles>
            <Document 
                file={pdf_file} 
                onLoadSuccess={() => {
                    // if (window.innerWidth < 682) {
                    //     document.getElementById("root").style.width = "682px"
                    // }
                    document.querySelector("#access-info").hidden = true
                }}>
                <Page className={["flexPage"]} width={document.querySelector('#root').clientWidth/1.45} height={document.querySelector('#root').clientHeight/1.45} pageNumber={1} />
            </Document>
            <a href={pdf_file} download>download as .pdf</a>
        </Styles>
        )
    }
}
