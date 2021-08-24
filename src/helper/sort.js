/* eslint eqeqeq: 0 */
import _ from "lodash";

const sortStudents = (condition, studentArray) => {
  if (condition.col == 0 && condition.val == "asc") {
    const sortedArr = _.orderBy(studentArray, ["id"], "asc");
    return sortedArr;
  } else if (condition.col == 0 && condition.val == "desc") {
    const sortedArr = _.orderBy(studentArray, ["id"], "desc");
    return sortedArr;
  }else if(condition.col == 1 && condition.val == "asc"){
    const sortedArr = _.orderBy(studentArray, ["name"], "asc");
    return sortedArr;
  }else if(condition.col == 1 && condition.val == "desc"){
    const sortedArr = _.orderBy(studentArray, ["name"], "desc");
    return sortedArr;
  }else if(condition.col == 3 && condition.val == "asc"){
    const sortedArr = _.orderBy(studentArray, ["dob"], "asc");
    return sortedArr;
  }else if(condition.col == 3 && condition.val == "desc"){
    const sortedArr = _.orderBy(studentArray, ["dob"], "desc");
    return sortedArr;
  }else if(condition.col == 7 && condition.val == "asc"){
    const sortedArr = _.orderBy(studentArray, ["total"], "asc");
    return sortedArr;
  }else if(condition.col == 7 && condition.val == "desc"){
    const sortedArr = _.orderBy(studentArray, ["total"], "desc");
    return sortedArr;
  }
};

export default sortStudents;
