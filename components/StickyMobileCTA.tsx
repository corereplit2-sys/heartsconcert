export function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-amberearth-300 bg-amber-50/95 p-3 backdrop-blur md:hidden">
      <a
        href="#tickets"
        className="inline-flex w-full items-center justify-center rounded-md bg-amberearth-900 px-4 py-3 text-sm font-medium text-amber-50"
      >
        Buy Tickets
      </a>
    </div>
  );
}
