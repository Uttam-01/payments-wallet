import { TailSpin } from "react-loader-spinner";
export const LoaderComp = () => {
    return (
        <TailSpin
            height="20"
            width="20"
            color="white"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        />
    );
};  
