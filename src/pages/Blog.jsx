import React, { Component } from "react";
import Pagination from "../components/Pagination";

const data ={content:{body: []}};

export default class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1,
    };
    this.handlePageChange = this._handlePageChange.bind(this);
    this.p = this._p.bind(this)
  }
  _p(id, page) {
    var ret = id / page; // index/ parseInt(activePage + "0")
    // ilki id ikincisi pageID
    ret.toString().split(".");
    return ret;
    }
  _handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({ activePage: pageNumber });
  }
  render() {
    data.content.body.map((e, index) => {
    console.log(e, index)
  })
    return (
      <>
        <div className="Blog">
          {data.content.body.map((block) => (
            <>
              <p>Title: {block.title}</p>
              <p>Location: {block.location}</p>
              <p>Description: {block.description}</p>
              <p>Tags: {block.tags.map(e=><span>{e}&nbsp;</span>)}</p>
              <li>{block.content}</li>
            </>
          ))}
        </div>
        <div>
          <Pagination
            activePage={this.state.activePage}
            itemsCountPerPage={10}
            totalItemsCount={450}
            pageRangeDisplayed={5}
            onChange={this.handlePageChange}
          /> 
        </div>
      </>
    );
  }
}
