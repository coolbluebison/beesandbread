

export default function SubDrawer({sub,setSub}){
    return(
        <div className={!sub? "w-0 transition-all duration-300 opacity-0 -z-50" : "w-[50rem] transition-all duration-300 h-screen bg-gray-200"} onMouseLeave={()=>setSub(false)}>
                
        </div>
    )
}