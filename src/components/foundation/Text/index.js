const title = ({ theme }) =>
  getTextStyleVariant(theme.typographyVariants.title);

const TextBase = styled.span`
  ${({ variant }) => TextStyleVariants[variant]}
`;

const Text = ({ tag, variant, children, ...props }) => (
  <TextBase as={tag} variant={variant} {...props}>
    {children}
  </TextBase>
);

export default Text;
