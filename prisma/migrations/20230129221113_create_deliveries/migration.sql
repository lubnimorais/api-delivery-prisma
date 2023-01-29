-- CreateTable
CREATE TABLE "deliveries" (
    "id" VARCHAR NOT NULL,
    "client_id" VARCHAR NOT NULL,
    "deliveryman_id" VARCHAR NOT NULL,
    "item_name" VARCHAR NOT NULL,
    "end_at" TIMESTAMPTZ,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "deliveries_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "deliveries" ADD CONSTRAINT "deliveries_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "deliveries" ADD CONSTRAINT "deliveries_deliveryman_id_fkey" FOREIGN KEY ("deliveryman_id") REFERENCES "deliveryman"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
