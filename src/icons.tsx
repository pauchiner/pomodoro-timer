import { createIcon } from "@chakra-ui/icons";

export const PauseIcon = createIcon({
  displayName: "PauseIcon",
  viewBox: "0 0 24 24",
  path: (
    <svg height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
    </svg>
  ),
});

export const PlayIcon = createIcon({
  displayName: "PlayIcon",
  viewBox: "0 0 24 24",
  path: (
    <svg height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M8 5v14l11-7z" />
    </svg>
  ),
});

export const StopIcon = createIcon({
  displayName: "StopIcon",
  viewBox: "0 0 24 24",
  path: (
    <svg height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M6 6h12v12H6z" />
    </svg>
  ),
});
