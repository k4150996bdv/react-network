// import React from "react"
// import styles from '../../Users/Users.module.css';

// const Pagination = (props) => {
//     let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize);
//     let pages = [];
//     for (let i = 1; i <= (pagesCount); i++) {
//         pages.push(i);
//     }
//     return <div className={styles.pagination}>
//         {pages.map(page => {
//             return <span className={props.currentPage === page && styles.selectedPage}
//                 onClick={(e) => { props.onPageChanged(page); }}
//             >
//                 {page}</span>
//         })}
//     </div>
// }

// export default Pagination;