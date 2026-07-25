import privacyPolicy from '../assets/privacy_policy/privacy_policy.md?raw'
import { LegalDocumentPage } from './LegalDocumentPage'

export function PrivacyPolicyPage() {
  return (
    <LegalDocumentPage
      content={privacyPolicy}
      description="Saiba como a BrilhoFlex trata dados pessoais, cookies e outras informações de visitantes."
      path="/politica-de-privacidade"
    />
  )
}
