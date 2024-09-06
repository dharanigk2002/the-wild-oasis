import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateSetting } from "../../services/apiSettings";

export function useEditSettings() {
  const queryClient = useQueryClient();
  const { mutate: updateSettings, isLoading: isSetting } = useMutation({
    mutationFn: updateSetting,
    onSuccess: () => {
      toast.success("Updated settings successfully");
      queryClient.invalidateQueries({
        queryKey: ["settings"],
      });
    },
    onError: (err) => {
      console.log(err.message);
      toast.error("Settings cannot be updated");
    },
  });
  return { updateSettings, isSetting };
}
