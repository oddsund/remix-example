import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { throwError } from "~/lib/exampleLibrary";


export const loader: LoaderFunction = async () => {
    throwError()
    return json({ ok: true });
};

export async function action() {
    throwError();
}

export default function NoErrorBoundary() {
    return <p>Nothing</p>
}

export function CatchBoundary() {
    return <p>Catch</p>
}

export function ErrorBoundary() {
    return <p>Error</p>
}