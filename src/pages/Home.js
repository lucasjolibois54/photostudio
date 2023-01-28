import React, {useState} from 'react'
import SliderBox from '../components/SliderBox'
import SidebarOptions from '../components/SidebarOptions'

const DEFAULT_OPTIONS = [
    {
        name: "Brightness",
        property: "brightness",
        value: 100,
        range: {
            min: 0,
            max: 300
        },
        unit: "%"
    },
    {
        name: "Contrast",
        property: "contrast",
        value: 100,
        range: {
            min: 0,
            max: 200
        },
        unit: "%"
    },
    {
        name: "Saturation",
        property: "saturate",
        value: 100,
        range: {
            min: 0,
            max: 200
        },
        unit: "%"
    },
    {
        name: "Grayscale",
        property: "grayscale",
        value: 0,
        range: {
            min: 0,
            max: 100
        },
        unit: "%"
    },
    {
        name: "Sepia",
        property: "sepia",
        value: 0,
        range: {
            min: 0,
            max: 100
        },
        unit: "%"
    },
    {
        name: "Hue Rotate",
        property: "hue-rotate",
        value: 0,
        range: {
            min: 0,
            max: 360
        },
        unit: "deg"
    },
    {
        name: "Invert Colors",
        property: "invert",
        value: 0,
        range: {
            min: 0,
            max: 100
        },
        unit: "%"
    },
    {
        name: "Blur",
        property: "blur",
        value: 0,
        range: {
            min: 0,
            max: 20
        },
        unit: "px"
    },
]

function Home() {
    const [selectedOptionIndex, setSelectedOptionIndex] = useState(0)
  const [options, setOptions] = useState(DEFAULT_OPTIONS)
  const selectedOption = options[selectedOptionIndex]

  function handleSliderChange({ target }) {
    setOptions(prevOptions => {
      return prevOptions.map((option, index) => {
        if (index !== selectedOptionIndex) return option
        return { ...option, value: target.value }
      })
    })
  }

  function getImageStyle() {
    const filters = options.map(option => {
      return `${option.property}(${option.value}${option.unit})`
    })

    return { filter: filters.join(' ') }
  }

  console.log(getImageStyle())
  

  const [image, setImage] = React.useState("");
  const imageRef = React.useRef(null);

  function useDisplayImage() {
    const [result, setResult] = React.useState("");

    function uploader(e) {
      const imageFile = e.target.files[0];

      const reader = new FileReader();
      reader.addEventListener("load", (e) => {
        setResult(e.target.result);
      });

      reader.readAsDataURL(imageFile);
    }

    return { result, uploader };
  }

  const { result, uploader } = useDisplayImage();

  return (
    <div>
    
        
<button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
   <span className="sr-only">Open sidebar</span>
   <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button>
<div className='absolute'>
<div id="default-sidebar" className="static top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 -z-10" aria-label="Sidebar">
   <div className="h-full px-3 py-4 overflow-y-auto bg-sidebar-bg">
      <ul className="space-y-2 mt-10">
            {options.map((options, index) => {
                return (<SidebarOptions className="relative"
                key={index}
                name={options.name}
                active={index === selectedOptionIndex}
                handleClick={() => setSelectedOptionIndex(index)}
                />)
            })}
            <input
        type="file"
        onChange={(e) => {
          setImage(e.target.files[0]);
          uploader(e);
        }}
      />
      </ul>
   </div>
</div></div>

<div className="p-7 sm:ml-64 bg-main-bg">
   <div className="p-7 border-2 border-neon-green border-dashed rounded-lg">
     
      <div className="flex items-center justify-center mb-4 rounded bg-main-bg container">
      {/* <div className='main-image' style={getImageStyle()}/> */}

      <div>
      
      {result && <img className='main-image' ref={imageRef} src={result} alt="" style={getImageStyle()}/>}
    </div>

    {/* <div className='input-center'>
      
      {result && <img className='main-image' ref={imageRef} src={result} alt="" style={getImageStyle()}/>}
      
      <input className='bg-gray-none text-gray-400 input-center container container-input w-full border-2 border-neon-green border-dashed rounded-lg '
        type="file"
        onChange={(e) => {
          setImage(e.target.files[0]);
          uploader(e);
        }}
      />
    </div> */}

      </div>
      <SliderBox  
      min={selectedOption.range.min}
        max={selectedOption.range.max}
        value={selectedOption.value}
        handleChange={handleSliderChange}/>
   </div>
</div>

    </div>
  )
}

export default Home