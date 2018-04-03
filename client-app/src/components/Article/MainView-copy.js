// import React from "react";
// import { connect } from "react-redux";

// //shared component
// import ArticleList from "../ArticleList";

// const mapStateToProps = state => ({
//   articles: state.articles
// });

// const MainView = props => {
//   return (
//     <div className="col-md-12">
//       <div className="feed-toggle">
//         <ul className="nav nav-pills outline-active">
//           <li className="nav-item">
//             <a href="" className="nav-link active">
//               Huddle Articles
//             </a>
//           </li>
//         </ul>
//       </div>
//       <ArticleList articles={props.articles} />
//     </div>
//   );
// };

// export default connect(mapStateToProps)(MainView);

import React from "react";

//shared component
import ArticleList from "../ArticleList";
const MainView = props => {
  return (
    <div className="col-md-9">
      <div className="feed-toggle">
        <ul className="nav nav-pills outline-active">
          <li className="nav-item">
            <a href="" className="nav-link active">
              Global Brig
            </a>
          </li>
        </ul>
      </div>
      <ArticleList articles={props.articles} />
    </div>
  );
};

export default MainView;