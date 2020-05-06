import useLocationSignal from "./useLocationSignal";

export default function useLocation() {
  const locationSignal = useLocationSignal();
  return locationSignal();
}
