import { useCreateMyRestaurant, useGetMyRestaurant, useUpdateMyRestaurant } from "@/api/MyRestaurantApi";
import ManageRestaurantForm from "@/forms/manage-restaurant-form/ManageRestaurantForm";

export default function ManageRestaurantPage() {

  const { createRestaurant, isLoading: isCreateLoading } = useCreateMyRestaurant();
  const { restaurant } = useGetMyRestaurant();
  const { UpdateRestaurant, isLoading: isUpdateLoading } = useUpdateMyRestaurant();

  const isEditing = !!restaurant;

  return (
    <ManageRestaurantForm
      restaurant={restaurant}
      onSave={isEditing ? UpdateRestaurant : createRestaurant}
      isLoading={isCreateLoading || isUpdateLoading}
    />
  );
};
