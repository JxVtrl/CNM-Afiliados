import ReactGA from "react-ga"

type AnalyticsEvent = {
  category: string
  action: string
  label: string
}

export const useAnalyticsEvent = ({
  category,
  action,
  label,
}: AnalyticsEvent) => {
  ReactGA.event({ category, action, label })
  return null
}
