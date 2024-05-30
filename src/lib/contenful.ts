import { createClient } from "contentful"
type Entry = {
  contentType: "product"
}

export const getEntries = async ({ contentType }: Entry) => {
  const contenful = createClient({
    space: import.meta.env.VITE_CONTENTFUL_SPACE_ID || "",
    accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN || "",
  })
  
  const entries = await contenful.getEntries({ content_type: contentType })
  
  return entries.items
}


