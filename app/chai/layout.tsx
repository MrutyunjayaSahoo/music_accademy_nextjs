export default function RootLayout({
  children,
}: Readonly<{
  // this is typrescript
  // here type is React.ReactNode
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* <h2>Inner layout item</h2> */}
      {children}
    </>
  );
}
