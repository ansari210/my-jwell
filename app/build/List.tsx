interface Props {
  data: any;
  componentId?: string;
}

const List = ({ data, componentId }: Props) => {
  const listData  = [...data.data];
  // const [listData, setListData] = useState(false);

  // useEffect(() => {
  //   if (data) {
  //     setListData([...data.data]); // Update tabs state when data is available
  //     // setLoading(false); // Update loading state to indicate that data fetching is complete
  //   }
  // }, [data]);

  // useEffect(() => {
  //   // console.log(++x, 0);
  //   if (listData.length === 0) {
  //     // handelNewText();
  //     console.log("hello", "new component>>>");
  //     // console.log(++x, 1);
  //   }
  // }, [listData]);
  const defaultTextObj = {
    content: "Write something about your web page...",
    size: "1rem",
    color: {
      alpha: 0.35,
      brightness: 90,
      hue: 60,
      saturation: 0,
    },
    position: "",
    fontFamily: "Verdana, sans-serif",
    fontweight: 300,
    lineHeight: "19px",
    wordSpacing: "2px",
    textDecoration: "",
    letterSpacing: 1,
    id: "2",
    type: "p",
  };

  // console.log("list element", data.data);

  const textInitObj = {
    textObj: {
      ...defaultTextObj,
    },
  };

  // const addList = () => {
  //   const newlist = [...listData, textInitObj];
  //   setListData(newlist);
  // };




  return (
    <div className="w-full my-2 min-h-fit ">
      <div className="w-full group ">
        <div className="border-[4px] border-transparent w-full  m-0 rounded-lg border-dashed group-hover:border-blue-400 p-4 flex justify-center h-full flex-col">
          {/* {listData?.map((el: any, i: number) => {
            return (
              <ul key={i}>
                <ListText elementObj={el} componentId={componentId} />
              </ul>
            );
          })} */}

          <div
            className="opacity-0 cursor-pointer absolute bottom-5  justify-center items-center h-0  right-1 
            text-[#fff]     group-hover:flex hidden z-40 transition-opacity
             duration-700 group-hover:opacity-100"
            // onClick={() => setVisible((prev) => !prev)}
          >
            {/* <IoAdd
              className={`w-8 h-8 p-2 bg-teal-700 rounded-full transition-transform duration-700 ${
                isVisible ? "rotate-45 text-blue-900" : "rotate-0"
              }`}
            /> */}
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default List;
