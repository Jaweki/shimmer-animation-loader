

const App = () => {
  return (
    <main className="w-[100vw] h-[100vh] bg-slate-200 flex justify-center items-center">
      <div className="w-[70%] h-[80%] bg-white rounded-lg flex flex-col items-center gap-6">
        <div className="flex flex-row w-[100%] h-[25%] mt-8 ml-6 gap-5">
          {/* shimmer Image panel */}
          <div className="w-[150px] h-[150px] bg-slate-300 rounded-full shimmer-effect"/>

          <div className=" flex flex-col w-[60%] h-[100%] gap-2 mr-5 justify-center">
            {/* shimmer Content bar 1 */}
            <div className="w-[100%] h-[30%] bg-slate-300 rounded-lg shimmer-effect"/>

            {/* shimmer Content bar 2 */}
            <div className="w-[50%] h-[30%] bg-slate-300 rounded-lg shimmer-effect"/>
          </div>
        </div>

        {/* shimmer Content tab  */}
        <div className="w-[80%] h-[60%] bg-slate-300 rounded-lg shimmer-effect" />
        
      </div>
    </main>
  )
}

export default App