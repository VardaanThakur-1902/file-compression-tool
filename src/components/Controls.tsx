import UploadButton from "./UploadButton";
import ClearButton from "./ClearButton";

interface Props {

  onCompress: () => void;

  onUpload: (text: string) => void;

  onClear: () => void;

}

export default function Controls({

  onCompress,

  onUpload,

  onClear,

}: Props) {

  return (

    <div className="flex flex-wrap gap-4">

      <UploadButton
        onUpload={onUpload}
      />

      <button
        onClick={onCompress}
        className="
        rounded-lg
        bg-blue-600
        px-6
        py-3
        text-white
        font-semibold
        hover:bg-blue-700
        transition
        "
      >
        Compress
      </button>

      <ClearButton
        onClear={onClear}
      />

    </div>

  );

}