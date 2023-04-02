/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from 'react'
import cls from 'classnames'
import { Control, Controller } from 'react-hook-form'
import { IconButton, TextField } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import styles from './chat-input.module.scss'
import { IDefaultComponentProps } from '../../lib/types/component.types'
import { IChatField } from '../../lib/types/form.types'

interface IComponentProps extends IDefaultComponentProps {
  control: Control<IChatField, any>
}

export const ChatInput: FC<IComponentProps> = ({ control }) => (
  <div className={cls(styles.wrapper)}>
    <Controller
      name="message"
      control={control}
      render={({ field }) => <TextField variant="standard" value={field.value} onChange={field.onChange} />}
    />
    <IconButton>
      <SendIcon color="primary" />
    </IconButton>
  </div>
)
