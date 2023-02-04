import { useState } from "react"

const AddPost = ({ onAdd }) => {
  const [start, setStart] = useState("")
  const [end, setend] = useState("")
  const [image, setImage] = useState("")

  const onSubmit = (e) => {
    e.preventDefault()

    if(!start) {
      alert("Please add a start location")
      return
    }
    if(!end) {
      alert("Please add an end location")
      return
    }
    if(!image) {
      alert("Please add an image")
      return
    }

    onAdd({ start, end, image})

    setStart("")
    setend("")
    setImage("")
  }

  return (
    <form className="add-form" onSubmit={onSubmit}>

    </form>
  )
}

export default AddPost