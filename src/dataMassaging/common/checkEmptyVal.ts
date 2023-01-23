const checkEmptyVal = (dataList: any) => {
  const checkList = { ...dataList };
  for (const ele in checkList) {
    if (!checkList[ele]) {
      return false;
    }
  }
  return true;
};

export default checkEmptyVal;
