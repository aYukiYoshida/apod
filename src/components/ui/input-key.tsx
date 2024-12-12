import {useState, FC, Dispatch} from "react";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import setCookie from "@/utils/cookie/setCookie";

type InputKeyProps = {
  setShowImageCard: Dispatch<boolean>;
};

const InputKey: FC<InputKeyProps> = ({setShowImageCard}): JSX.Element => {
  const [inputKeyValue, setInputKeyValue] = useState<string>("");

  const handleInputKeyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputKeyValue(event.target.value);
  };

  const handleSaveKeyClick = () => {
    setCookie("key", inputKeyValue);
    setShowImageCard(true);
  };

  return (
    <div className="text-white">
      <h1 className="text-3xl pb-6">Astronomy Picture of the Day</h1>
      <div className="flex items-center space-x-4">
        <Input
          type="text"
          className="w-96 border-gray-400 border-2 placeholder-red placeholder-opacity-0"
          value={inputKeyValue}
          onChange={handleInputKeyChange}
          placeholder="Enter API KEY of APOD"
        />
        <Button
          onClick={handleSaveKeyClick}
          className="bg-gray-400 background rounded-md hover:bg-gray-700"
        >
          Save
        </Button>
      </div>
    </div>
  );
};

export {InputKey};
