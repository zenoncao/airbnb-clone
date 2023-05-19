'use client'

import useSearchModal from "@/app/hooks/useSearchModal";
import Modal from "./Modal";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

enum STEPS {
  LOCATION = 0,
  DATE = 1,
  INFO = 2,
}

const SearchModal = () => {
  const router = useRouter()
  const params = useSearchParams()
  
  const [step, setStep ] = useState(STEPS.LOCATION)

  return (
    <Modal 
      isOpen={searchModal.isOpen}
      onClose={searchModal.onClose}
    />
  )
};

export default SearchModal;
