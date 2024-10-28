import toast from "react-hot-toast";

const Message = ({
  visible,
  message,
  success,
}: {
  visible: boolean;
  message: string;
  success: boolean;
}) => {
  return (
    <div
      className={`${
        visible ? "animate-enter" : "animate-leave"
      } max-w-xl w-fit bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
    >
      <div className="p-4 flex flex-1 items-center justify-center">
        <div
          className={`text-md text-center font-medium flex-1 ${
            success ? "text-[#63a054]" : "text-red"
          }`}
        >
          {message}
        </div>
      </div>
    </div>
  );
};

export const showSuccessMessage = (message: string) => {
  toast.custom(
    (t) => <Message visible={t.visible} message={message} success={true} />,
    {
      position: "bottom-left",
    }
  );
};

export const showErrorMessage = (message: string) => {
  console.log('mmm',message);
  
  toast.custom(
    (t) => <Message visible={t.visible} message={message} success={false} />,
    {
      position: "bottom-left",
    }
  );
};
