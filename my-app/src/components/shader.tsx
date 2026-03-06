import { ShaderAnimation } from "@/components/ui/shader-animation"
import "./shader.css"

export default function Shader() {
  return (
    <div aria-hidden className="shader-background">
      <ShaderAnimation />
    </div>
  )
}
