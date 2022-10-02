import { CloseIcon, SettingsIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import { useContext } from "react";
import { Context } from "../store/context";

interface Props {
  variant: string;
  colorScheme: string;
  onClick: any;
}

const CornerButton = (props: Props) => {
  const { setRoute }: any = useContext(Context);

  const getIcon = () => {
    switch (props.variant) {
      case "settings":
        return <SettingsIcon />;
      case "back":
        return <CloseIcon />;
    }
  };

  const getRoute = () => {
    switch (props.variant) {
      case "settings":
        return "settings";
      case "back":
        return "main";
    }
  };

  return (
    <IconButton
      aria-label={props.variant}
      colorScheme={props.colorScheme}
      icon={getIcon()}
      onClick={() => setRoute(getRoute())}
      position="fixed"
      left={2}
      top={2}
    />
  );
};

CornerButton.defaultProps = {
  variant: "setttings",
  colorScheme: "teal",
  onClick: null,
};

export default CornerButton;
