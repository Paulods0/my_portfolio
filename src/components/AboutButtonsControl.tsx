import React from "react"

const buttons = [
  {
    title: "who Am I",
  },
  {
    title: "hobbies",
  },
  {
    title: "goals",
  },
]

const AboutButtonsControl = ({
  active,
  handleClick,
}: {
  active: string
  handleClick: () => void
}) => {
  return (
    <ul>
      {buttons.map((button, index) => (
        <li key={index}>
          <button
            onClick={handleClick}
            className={`${
              button.title === active ? "text-laranja" : "text-cinza"
            }`}
          >
            {button.title}
          </button>
        </li>
      ))}
    </ul>
  )
}

export default AboutButtonsControl
