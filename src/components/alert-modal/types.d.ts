export interface AlertModalProps {
  id: string;
  title: string;
  description: string;
  buttons?: 'two' | 'one';
  positiveButton?: string;
  negativeButton?: string;
  onAccept?: any;
}
