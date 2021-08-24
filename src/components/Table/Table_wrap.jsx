/* eslint eqeqeq: 0 */
import { useContext } from "react";
import { Container, Row, Col, Table, Form } from "react-bootstrap";
import Search from "../Search/Search-box";
import TableRow from "./Table_row";
import classes from "./Table_wrap.module.css";
import TableContext from "../../store/table-context";
import Pagination from "../pagination/pagination";
import filterStudents from "../../helper/filter"
import Summary from "../Summary/Summary";

const TableWrap = () => {
  const tableCtx = useContext(TableContext);
  const sortHandler = (condition) => {
    tableCtx.sortStudent(condition);
  };
  const selectHandler = (e) => {
    tableCtx.paginate({postsPerPage : e.target.value});
  }

  //filter
  let filteredArray = tableCtx.studentDetails;
  if(tableCtx.search){
    filteredArray = filterStudents(tableCtx.search,filteredArray)
  }

  // Get current posts
  const indexOfLastPost =
    tableCtx.pagination.currentPage * tableCtx.pagination.postsPerPage;
  const indexOfFirstPost = indexOfLastPost - tableCtx.pagination.postsPerPage;
  const currentPosts = filteredArray.slice(
    indexOfFirstPost,
    indexOfLastPost
  );
  if(!currentPosts.length && filteredArray.length){
    const prevPageNum = tableCtx.pagination.currentPage - 1;
    tableCtx.paginate({currentPage : prevPageNum});
  }
 

  return (
    <Container fluid="xl">
      <div className={classes["table-responsive"]}>
        <div className={classes["table-wrapper"]}>
          <div className={classes["table-title"]}>
            <Row>
              <Col sm={8}>
                <h2>
                  Student <b>Details</b>
                </h2>
              </Col>
              <Col sm={4}>
                <Search />
              </Col>
            </Row>  
            <Row className={classes.pag}>
              <Col ><span>Show</span></Col>
              <Col>
              <Form.Select size="sm" value={tableCtx.pagination.postsPerPage} onChange={selectHandler}>
                <option value="3">3</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
              </Form.Select>
              </Col>
              <Col><span>Entries</span></Col>
            </Row>    
          </div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th style={{display : tableCtx.table[0].isShown ? '' : 'none'}}>
                  <div className={classes["sort-container"]}>
                    <b>ID</b>
                    <div className={classes["icon-wrapper"]}>
                      <i
                        className="fa fa-sort-asc"
                        style={{
                          lineHeight: 0.3,
                          cursor: "pointer",
                          color:
                            tableCtx.sort.col == 0 && tableCtx.sort.val == "asc"
                              ? "black"
                              : "gray",
                        }}
                        onClick={() => {
                          sortHandler({ col: 0, val: "asc" });
                        }}
                      ></i>
                      <i
                        className="fa fa-sort-desc"
                        style={{
                          lineHeight: 0.3,
                          cursor: "pointer",
                          color:
                            tableCtx.sort.col == 0 &&
                            tableCtx.sort.val == "desc"
                              ? "black"
                              : "gray",
                        }}
                        onClick={() => {
                          sortHandler({ col: 0, val: "desc" });
                        }}
                      ></i>
                    </div>
                  </div>
                </th>
                <th style={{display : tableCtx.table[1].isShown ? '' : 'none'}}>
                  <div className={classes["sort-container"]}>
                    <b>Name</b>
                    <div className={classes["icon-wrapper"]}>
                      <i
                        className="fa fa-sort-asc"
                        style={{
                          lineHeight: 0.3,
                          cursor: "pointer",
                          color:
                            tableCtx.sort.col == 1 && tableCtx.sort.val == "asc"
                              ? "black"
                              : "gray",
                        }}
                        onClick={sortHandler.bind(null, { col: 1, val: "asc" })}
                      ></i>
                      <i
                        className="fa fa-sort-desc"
                        style={{
                          lineHeight: 0.3,
                          cursor: "pointer",
                          color:
                            tableCtx.sort.col == 1 &&
                            tableCtx.sort.val == "desc"
                              ? "black"
                              : "gray",
                        }}
                        onClick={sortHandler.bind(null, {
                          col: 1,
                          val: "desc",
                        })}
                      ></i>
                    </div>
                  </div>
                </th>
                <th style={{display : tableCtx.table[2].isShown ? '' : 'none'}}>Address</th>
                <th style={{display : tableCtx.table[3].isShown ? '' : 'none'}}>
                  <div className={classes["sort-container"]}>
                    <b>DOB</b>
                    <div className={classes["icon-wrapper"]}>
                      <i
                        className="fa fa-sort-asc"
                        style={{
                          lineHeight: 0.3,
                          cursor: "pointer",
                          color:
                            tableCtx.sort.col == 3 && tableCtx.sort.val == "asc"
                              ? "black"
                              : "gray",
                        }}
                        onClick={sortHandler.bind(null, { col: 3, val: "asc" })}
                      ></i>
                      <i
                        className="fa fa-sort-desc"
                        style={{
                          lineHeight: 0.3,
                          cursor: "pointer",
                          color:
                            tableCtx.sort.col == 3 &&
                            tableCtx.sort.val == "desc"
                              ? "black"
                              : "gray",
                        }}
                        onClick={sortHandler.bind(null, {
                          col: 3,
                          val: "desc",
                        })}
                      ></i>
                    </div>
                  </div>
                </th>
                <th style={{display : tableCtx.table[4].isShown ? '' : 'none'}}>Mark 1</th>
                <th style={{display : tableCtx.table[5].isShown ? '' : 'none'}}>Mark 2</th>
                <th style={{display : tableCtx.table[6].isShown ? '' : 'none'}}>Mark 3</th>
                <th style={{display : tableCtx.table[7].isShown ? '' : 'none'}}>
                  <div className={classes["sort-container"]}>
                    <b>Total Marks</b>
                    <div className={classes["icon-wrapper"]}>
                      <i
                        className="fa fa-sort-asc"
                        style={{
                          lineHeight: 0.3,
                          cursor: "pointer",
                          color:
                            tableCtx.sort.col == 7 && tableCtx.sort.val == "asc"
                              ? "black"
                              : "gray",
                        }}
                        onClick={sortHandler.bind(null, { col: 7, val: "asc" })}
                      ></i>
                      <i
                        className="fa fa-sort-desc"
                        style={{
                          lineHeight: 0.3,
                          cursor: "pointer",
                          color:
                            tableCtx.sort.col == 7 &&
                            tableCtx.sort.val == "desc"
                              ? "black"
                              : "gray",
                        }}
                        onClick={sortHandler.bind(null, {
                          col: 7,
                          val: "desc",
                        })}
                      ></i>
                    </div>
                  </div>
                </th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentPosts.length ? (
                currentPosts.map((item) => (
                  <TableRow key={item.id} details={item} />
                ))
              ) : (
                <tr>
                  <td colSpan="9" style={{ textAlign: "center" }}>
                    No data available
                  </td>
                </tr>
              )}
             {filteredArray.length ? <Summary posts={currentPosts} /> : ''}
            </tbody>
          </Table>
          <Row>
            <Col>
              <div>
                Showing <b>{filteredArray.length ? indexOfFirstPost + 1 : indexOfFirstPost}</b> to{" "}
                <b>
                  {indexOfLastPost > filteredArray.length
                    ? filteredArray.length
                    : indexOfLastPost}
                </b>{" "}
                out of <b>{filteredArray.length}</b> entries
              </div>
            </Col>
            <Col>
              <Pagination
                postsPerPage={tableCtx.pagination.postsPerPage}
                totalPosts={filteredArray.length}
              />
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
};

export default TableWrap;
