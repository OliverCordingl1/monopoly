interface PageContainerProps {
  children?: React.ReactNode;
}

export const PageContainer = ({ children }: PageContainerProps) => {
  return <div className="w-full min-h-full p-5">{children}</div>;
};
