import TextInputFormContainer from "../TextInputForm/TextInputFormContainer"


function StartGame() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-center text-4xl font-bold mt-5" >StartGame</h1>
      <div className="w-full mx-auto my-1 border-blue-400  flex  justify-center items-center">
        <TextInputFormContainer />
      </div>
    </div>
  )
}

export default StartGame