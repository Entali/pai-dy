import logoImg from './logoImg.ts'
import './Logo.scss'

interface Props {
  width?: string
  height?: string
  alt?: string
}

const Logo: React.FC<Props> = (props: Props) => {
  const {width, height, alt} = props
  const baseHeight = '1,6875rem'

  return (
      <div className="logo" style={{
        width: '4rem' || width,
        height: baseHeight || height,
      }}>
        <img
            src={logoImg}
            alt={alt || 'Paidy'}
            style={{
              lineHeight: baseHeight || height,
            }}
        />
      </div>
  );
};

export default Logo
