import { Component } from "react";
import CommentArea from "./CommentArea";
import SelectedBookCover from "./SelectedBookCover";
import ShowComments from "./RenderComments";

class Sidebar extends Component {
  render() {
    return (
      <div className="mt-5">
        <SelectedBookCover selectedBook={this.props.selectedBook} />
        <CommentArea selectedBook={this.props.selectedBook} />
        {/* <ShowComments selectedBook={this.props.selectedBook} /> */}
      </div>
    );
  }
}

export default Sidebar;
