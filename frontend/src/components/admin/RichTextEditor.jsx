import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import Link from '@tiptap/extension-link'
import Placeholder from '@tiptap/extension-placeholder'
import Image from '@tiptap/extension-image'
import { useEffect, useRef } from 'react'

const ToolbarButton = ({ onClick, active, title, children }) => (
  <button
    type="button"
    onClick={onClick}
    title={title}
    style={{
      padding: '5px 8px',
      borderRadius: '6px',
      fontSize: '13px',
      fontWeight: '600',
      cursor: 'pointer',
      border: 'none',
      transition: 'all 0.15s',
      background: active ? 'rgba(234,179,8,0.25)' : 'transparent',
      color: active ? '#eab308' : 'rgba(148,163,184,1)',
      minWidth: '30px',
    }}
    onMouseEnter={e => { if (!active) e.currentTarget.style.background = 'rgba(255,255,255,0.08)' }}
    onMouseLeave={e => { if (!active) e.currentTarget.style.background = 'transparent' }}
  >
    {children}
  </button>
)

const Divider = () => (
  <div style={{ width: '1px', height: '20px', background: 'rgba(255,255,255,0.1)', margin: '0 4px' }} />
)

export default function RichTextEditor({ value, onChange, placeholder = 'Write your content here...' }) {

  const fileInputRef = useRef(null)

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link.configure({ openOnClick: false }),
      Placeholder.configure({ placeholder }),
      Image.configure({ inline: false }),
    ],
    content: value || '',
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML())
    },
    editorProps: {
      attributes: {
        style: 'outline: none; min-height: 200px; padding: 16px; color: white; font-size: 14px; line-height: 1.7;',
      },
    },
  })

  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value || '')
    }
  }, [value])

  if (!editor) return null

  const setLink = () => {
    const url = window.prompt('Enter URL')
    if (url) editor.chain().focus().setLink({ href: url }).run()
    else editor.chain().focus().unsetLink().run()
  }

  // open file picker
  const addImage = () => {
    fileInputRef.current.click()
  }

  // handle image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0]
    if (!file) return

    const reader = new FileReader()

    reader.onload = () => {
      editor.chain().focus().setImage({ src: reader.result }).run()
    }

    reader.readAsDataURL(file)

    event.target.value = ''
  }

  return (
    <div style={{
      border: '1px solid rgba(255,255,255,0.1)',
      borderRadius: '10px',
      background: 'rgba(255,255,255,0.03)',
      overflow: 'hidden',
      transition: 'border-color 0.2s',
    }}
      onFocus={e => e.currentTarget.style.borderColor = 'rgba(234,179,8,0.5)'}
      onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
    >

      {/* hidden file input */}
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleImageUpload}
        style={{ display: 'none' }}
      />

      {/* TOOLBAR */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: '2px',
        padding: '8px 10px',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        background: 'rgba(255,255,255,0.02)',
      }}>

        {/* Headings */}
        <ToolbarButton onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          active={editor.isActive('heading', { level: 1 })} title="Heading 1">H1</ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          active={editor.isActive('heading', { level: 2 })} title="Heading 2">H2</ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          active={editor.isActive('heading', { level: 3 })} title="Heading 3">H3</ToolbarButton>

        <Divider />

        {/* Text style */}
        <ToolbarButton onClick={() => editor.chain().focus().toggleBold().run()}
          active={editor.isActive('bold')} title="Bold"><strong>B</strong></ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().toggleItalic().run()}
          active={editor.isActive('italic')} title="Italic"><em>I</em></ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().toggleUnderline().run()}
          active={editor.isActive('underline')} title="Underline"><u>U</u></ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().toggleStrike().run()}
          active={editor.isActive('strike')} title="Strikethrough"><s>S</s></ToolbarButton>

        <Divider />

        {/* Lists */}
        <ToolbarButton onClick={() => editor.chain().focus().toggleBulletList().run()}
          active={editor.isActive('bulletList')} title="Bullet List">• List</ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().toggleOrderedList().run()}
          active={editor.isActive('orderedList')} title="Numbered List">1. List</ToolbarButton>

        <Divider />

        {/* Blocks */}
        <ToolbarButton onClick={() => editor.chain().focus().toggleBlockquote().run()}
          active={editor.isActive('blockquote')} title="Blockquote">" "</ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().toggleCode().run()}
          active={editor.isActive('code')} title="Inline Code">`code`</ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          active={editor.isActive('codeBlock')} title="Code Block">{'</>'}</ToolbarButton>

        <Divider />

        {/* Link */}
        <ToolbarButton onClick={setLink} active={editor.isActive('link')} title="Add Link">🔗</ToolbarButton>

        {/* Image upload */}
        <ToolbarButton onClick={addImage} active={false} title="Upload Image">🖼️</ToolbarButton>

        <Divider />

        {/* History */}
        <ToolbarButton onClick={() => editor.chain().focus().undo().run()} title="Undo">↩</ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().redo().run()} title="Redo">↪</ToolbarButton>

        <Divider />

        {/* Clear */}
        <ToolbarButton
          onClick={() => editor.chain().focus().clearContent().run()}
          title="Clear content"
          active={false}
        >🗑️</ToolbarButton>
      </div>

      <EditorContent editor={editor} />

      <style>{`
        .tiptap p { margin: 0 0 8px; }
        .tiptap h1 { font-size: 24px; font-weight: 700; color: #eab308; margin: 16px 0 8px; }
        .tiptap h2 { font-size: 20px; font-weight: 700; color: #fde047; margin: 14px 0 6px; }
        .tiptap h3 { font-size: 17px; font-weight: 600; color: #fef08a; margin: 12px 0 4px; }
        .tiptap img { max-width: 100%; border-radius: 8px; margin: 12px 0; display:block; }
      `}</style>

    </div>
  )
}