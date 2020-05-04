import React from "react"
const ClientSideOnlyLazy = React.lazy(() =>
  import("./order-button-modal")
)

const OrderButtonLazy = (props) => {
  const isSSR = typeof window === "undefined"
  return (
    <>
      {!isSSR && (
        <React.Suspense fallback={<div />}>
          <ClientSideOnlyLazy />
        </React.Suspense>
      )}
    </>
  )
}

export default OrderButtonLazy