import Spinner from "@/components/Spinner/Spinner"

interface props 
{
  label: string;
  type?: "button" | "submit" | "reset" | undefined;
  isLoad?: boolean;
  disabled?:boolean;
}

export default function MyAssButton({label,type="button",isLoad=false,disabled=false}:props) 
{
    const isDisable= disabled||isLoad;

    return (
      <button className={`w-[100%] bg-blue-600 relative px-[1.5rem] py-[.8rem] text-[#fff] transition-all duration-200 font-medium ${isDisable ? 'brightness-[80%]':''}`}
        disabled={isDisable}
        type={type}
      >
        <span className={`${isLoad ? "opacity-0" : ""}`}>{label}</span>
        {isLoad && (
            <Spinner isButtonLoad={true}/>
        )}
      </button>
    ); 
}