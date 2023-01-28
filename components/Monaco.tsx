/*
 * @Description:
 * @Author: Tsingwong
 * @Date: 2023-01-28 23:37:08
 * @LastEditors: Tsingwong
 * @LastEditTime: 2023-01-28 23:48:08
 */
import Editor from '@monaco-editor/react'

interface IMonacoProps {
  defaultValue?: string
  language?: string
  value?: string
  theme?: 'light' | 'vs-dark'
  options?: Record<string, any>
  width?: string | number
  height?: string | number
  className?: string
  onChange: (value: string | undefined) => void
}

const Monaco: React.FC<IMonacoProps> = ({
  defaultValue,
  language,
  value,
  theme,
  options,
  width,
  height,
  className,
  onChange,
}) => {
  return (
    <Editor
      className={className}
      defaultLanguage={language}
      defaultValue={defaultValue}
      value={value}
      height={height}
      width={width}
      options={options}
      onChange={onChange}
      loading={<span>Loading...</span>}
    />
  )
}

export default Monaco
