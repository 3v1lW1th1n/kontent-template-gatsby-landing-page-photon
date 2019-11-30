import React from "react"
import { graphql } from "gatsby"

const TestPage = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>

export const query = graphql`
{
  allKontentItemTestPreview {
    nodes {
      preferred_language
      elements {
        date___time {
          value
        }
        gatsby_preview__gatsby_preview_watcher {
          value
        }
        number {
          value
        }
        text {
          value
        }
        toast_ui_editor {
          value
        }
        url_slug_text_source {
          value
        }
        url_slug {
          value
        }
        asset {
          name
          type
          value {
            name
            type
            size
            url
            width
            height
          }
        }
        linked_items {
          linked_items {
            system {
              name
              type
              codename
            }
          }
        }
        rich_text {
          name
          type
          value
          resolvedData {
            html
            linkedItemCodenames
            componentCodenames
          }
          images {
            imageId
            description
            height
            width
            url
          }
          links {
            linkId
            codename
            urlSlug
          }
          linked_items {
            system {
              codename
              type
              name
            }
          }
        }
      }
    }
  }
}
`

export default TestPage
