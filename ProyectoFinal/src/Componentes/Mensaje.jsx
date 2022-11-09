function Mensaje({ children }) {

    return (
        <div className="flex justify-center ">
            <div className="bg-[#FF0000] text-white text-sm md:text-lg text-center font-bold tracking-wider rounded-md p-1 mb-4 w-5/6" >
                {children}
            </div>
        </div>
    )
}

export default Mensaje;