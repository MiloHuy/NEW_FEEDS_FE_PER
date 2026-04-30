import type { FC, ReactNode } from "react";

export type BaseCardProps = {
  header: ReactNode;
  
  body?: ReactNode;
  
  media?: ReactNode;
  
  counters?: ReactNode;
  
  actions?: ReactNode;
  
  className?: string;
  
  style?: React.CSSProperties;
};

const BaseCard: FC<BaseCardProps> = ({ 
  header, 
  body, 
  media, 
  counters, 
  actions, 
  className = "",
  style 
}) => (
  <div className={`base-card ${className}`} style={style}>
    <div className="base-card__header">{header}</div>
    
    {body && <div className="base-card__body">{body}</div>}
    
    {media && <div className="base-card__media">{media}</div>}
    
    {counters && <div className="base-card__counters">{counters}</div>}
    
    {actions && <div className="base-card__actions">{actions}</div>}
  </div>
);

export default BaseCard;
