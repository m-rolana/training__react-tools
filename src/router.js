import { createBrowserRouter } from "react-router-dom";
// import Root, { loader as rootLoader, action as rootAction } from "./routes/Root";
import Root from "./routes/Root";
import ErrorPage from "./pages/Error";
// import Contact, { loader as contactLoader, action as contactAction } from "./routes/Contact";
// import EditContact, { loader as editLoader, action as editAction } from "./routes/Edit";
// import { action as destroyAction } from "./routes/Destroy";
// import IndexTool from "./routes/WipTool";
import ReverseStrings from "./routes/ReverseStrings";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/reverse_strings",
                element: <ReverseStrings />,
            },
            // errorElement: <ErrorPage />,
            // children: [
            //     // {
            //     //     path: "contacts/:contactId",
            //     //     element: <Contact />,
            //     //     loader: contactLoader,
            //     //     action: contactAction,
            //     // },
            //     // {
            //     //     path: "contacts/:contactId/edit",
            //     //     element: <EditContact />,
            //     //     loader: editLoader,
            //     //     action: editAction,
            //     // },
            //     // {
            //     //     path: "contacts/:contactId/destroy",
            //     //     action: destroyAction,
            //     //     errorElement: <div>Oops! There was an error.</div>,
            //     // },
            //     { path: "", element: <IndexTool /> },
            // ],
        ],
        // loader: rootLoader,
        // action: rootAction,
    },
]);

export default router;
