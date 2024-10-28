import Icon from "./Icon";

type PaginationProps = {
  onClickP: () => void;
  onClickN: () => void;
  currentPage: number;
  npage: number;
};

const Pagination = ({
  onClickP,
  onClickN,
  currentPage,
  npage,
}: PaginationProps) => {
  console.log('npage', npage);
  
  return (
    <div className="w-[100%] flex justify-between lg:justify-end">
      {npage > 1 ? (
        <>
          <div className="lg:w-1/3 w-full flex lg:justify-end justify-center lg:pl-9 pt-1 items-center">
            <button
              onClick={onClickN}
              disabled={currentPage === npage}
              className={`w-fit bg-parisan-color-1 text-white rounded outline-none p-2 mx-1 flex justify-center items-center ${
                currentPage === npage
                  && "text-white border border-parisan-color-1/[0.20] "
              }`}
            >
              <Icon
                height={20}
                width={20}
                iconUrl="/icons/Arrow_white.svg"
                customeClass="-rotate-90"
              />
              صفحه بعد
            </button>
            
            <div className="w-1/7 p-1 flex justify-center items-center text-parisan-color-1 font-bold ">
              <span className="w-fit px-2 py-1 mx-2 rounded border border-parisan-color-1/[0.20] bg-parisan-color-1/[0.02] text-parisan-color-1">
                {currentPage}
              </span>
            </div>

            <button
              onClick={onClickP}
              disabled={currentPage === 1}
              className={`p-2 bg-parisan-color-1/[0.02] border border-parisan-color-1/[0.20] rounded text-parisan-color-1 flex items-center justify-center ${
                currentPage === 1 ? "text-parisan-color-1/[0.20]" : ""
              }`}
            >
              صفحه قبل
              <Icon
                height={20}
                width={20}
                iconUrl="/icons/Arrow_purple.svg"
                customeClass="rotate-90"
              />
            </button>
          </div>
          
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Pagination;
