export function getShareText(songTitle: string): string {
  return `我在苏打绿人格测验中，命定之歌是《${songTitle}》。\n\n用10道题找到最契合你灵魂的那首苏打绿，来测测你的→`
}

export async function copyResultImage(element: HTMLElement): Promise<boolean> {
  try {
    const { default: html2canvas } = await import('html2canvas')
    const canvas = await html2canvas(element, {
      backgroundColor: '#1a1714',
      scale: 2,
      useCORS: true,
    })
    const blob = await new Promise<Blob | null>((resolve) =>
      canvas.toBlob(resolve, 'image/png')
    )
    if (!blob) return false

    await navigator.clipboard.write([
      new ClipboardItem({ 'image/png': blob }),
    ])
    return true
  } catch {
    return false
  }
}

export async function nativeShare(title: string, songTitle: string): Promise<boolean> {
  if (!navigator.share) return false
  try {
    await navigator.share({
      title,
      text: getShareText(songTitle),
      url: window.location.href,
    })
    return true
  } catch {
    return false
  }
}
